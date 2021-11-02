import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

export interface Chain {
    test: boolean;
    name: string;
    coin?: string;
    chain: string;
    unit?: string;
    identity: string;
    tooltip: string;
    port?: number;
    rpcPort?: number;
    apiPort?: number;
    wsPort?: number;
    network: string;
    mode?: string;
    genesisDate?: Date;
    path?: string;
    datafolder?: string;

    private?: number;
    public?: number;
    rootFolderName: string;
    pos: boolean;
    opreturndata: number;
}

@Injectable({
    providedIn: 'root'
})
export class ChainService {

    static singletonInstance: ChainService;

    public availableChains: Array<Chain>;

    constructor(private log: Logger) {

        if (!ChainService.singletonInstance) {

            /** Modify this collection to add additional chain support. */
            this.availableChains = [
                { opreturndata: 80, pos: true, rootFolderName: 'Cybits', test: false, name: 'Cybits Main', chain: 'Cybits', private: 160, public: 28, identity: 'Cybits', tooltip: 'Cybits', port: 17771, rpcPort: 17772, apiPort: 17773, network: 'CybitsMain', genesisDate: new Date(2021, 11, 1) },

            ];

            // Sort the array by name.
            this.availableChains.sort((a, b) => a.name.localeCompare(b.name));

            ChainService.singletonInstance = this;
        }

        return ChainService.singletonInstance;
    }

    /** Retrieves a configuration for a blockchain, including the right network name and ports. */
    getChain(network: string): Chain {
        const selectedChains = this.availableChains.filter(c => c.network === network);
        let selectedChain: Chain;

        if (selectedChains.length === 0) {
            this.log.error('The supplied coin parameter is invalid. First available chain selected as default. Argument value: ' + network);
            selectedChain = this.availableChains[0];
        } else {
            selectedChain = selectedChains[0];
        }

        return selectedChain;
    }
}
