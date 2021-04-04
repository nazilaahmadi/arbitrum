/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from 'ethers'
import { Listener, Provider } from 'ethers/providers'
import { Arrayish, BigNumber, BigNumberish, Interface } from 'ethers/utils'
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription,
} from '.'

interface ArbBlsInterface extends Interface {
  functions: {
    getPublicKey: TypedFunctionDescription<{
      encode([addr]: [string]): string
    }>

    register: TypedFunctionDescription<{
      encode([x0, x1, y0, y1]: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ]): string
    }>
  }

  events: {}
}

export class ArbBls extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ArbBls
  attach(addressOrName: string): ArbBls
  deployed(): Promise<ArbBls>

  on(event: EventFilter | string, listener: Listener): ArbBls
  once(event: EventFilter | string, listener: Listener): ArbBls
  addListener(eventName: EventFilter | string, listener: Listener): ArbBls
  removeAllListeners(eventName: EventFilter | string): ArbBls
  removeListener(eventName: any, listener: Listener): ArbBls

  interface: ArbBlsInterface

  functions: {
    getPublicKey(
      addr: string,
      overrides?: TransactionOverrides
    ): Promise<{
      0: BigNumber
      1: BigNumber
      2: BigNumber
      3: BigNumber
    }>

    'getPublicKey(address)'(
      addr: string,
      overrides?: TransactionOverrides
    ): Promise<{
      0: BigNumber
      1: BigNumber
      2: BigNumber
      3: BigNumber
    }>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>
  }

  getPublicKey(
    addr: string,
    overrides?: TransactionOverrides
  ): Promise<{
    0: BigNumber
    1: BigNumber
    2: BigNumber
    3: BigNumber
  }>

  'getPublicKey(address)'(
    addr: string,
    overrides?: TransactionOverrides
  ): Promise<{
    0: BigNumber
    1: BigNumber
    2: BigNumber
    3: BigNumber
  }>

  register(
    x0: BigNumberish,
    x1: BigNumberish,
    y0: BigNumberish,
    y1: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  'register(uint256,uint256,uint256,uint256)'(
    x0: BigNumberish,
    x1: BigNumberish,
    y0: BigNumberish,
    y1: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>

  filters: {}

  estimate: {
    getPublicKey(
      addr: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'getPublicKey(address)'(
      addr: string,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    register(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>

    'register(uint256,uint256,uint256,uint256)'(
      x0: BigNumberish,
      x1: BigNumberish,
      y0: BigNumberish,
      y1: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<BigNumber>
  }
}
