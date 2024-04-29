
/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  AztecAddress,
  AztecAddressLike,
  CompleteAddress,
  Contract,
  ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  ContractInstanceWithAddress,
  ContractMethod,
  ContractStorageLayout,
  ContractNotes,
  DeployMethod,
  EthAddress,
  EthAddressLike,
  FieldLike,
  Fr,
  FunctionSelectorLike,
  loadContractArtifact,
  NoirCompiledContract,
  Point,
  PublicKey,
  Wallet,
  WrappedFieldLike,
} from '@aztec/aztec.js';
import BatcherVaultContractArtifactJson from '../../aztec-contracts/batcher_contract/target/batcher_contract-BatcherVault.json' assert { type: 'json' };
export const BatcherVaultContractArtifact = loadContractArtifact(BatcherVaultContractArtifactJson as NoirCompiledContract);

/**
 * Type-safe interface for contract BatcherVault;
 */
export class BatcherVaultContract extends ContractBase {
  
  private constructor(
    instance: ContractInstanceWithAddress,
    wallet: Wallet,
  ) {
    super(instance, BatcherVaultContractArtifact, wallet);
  }
  

  
  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(
    address: AztecAddress,
    wallet: Wallet,
  ) {
    return Contract.at(address, BatcherVaultContract.artifact, wallet) as Promise<BatcherVaultContract>;
  }

  
  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(wallet: Wallet, admin: AztecAddressLike, target: AztecAddressLike, token_in: AztecAddressLike, token_out: AztecAddressLike, relayer: AztecAddressLike, bonding_token: AztecAddressLike, bonding_amount: FieldLike, he_pub_key: FieldLike, sk_hash: FieldLike, interval: FieldLike, he_secret_key: FieldLike) {
    return new DeployMethod<BatcherVaultContract>(Point.ZERO, wallet, BatcherVaultContractArtifact, BatcherVaultContract.at, Array.from(arguments).slice(1));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public key to derive the address.
   */
  public static deployWithPublicKey(publicKey: PublicKey, wallet: Wallet, admin: AztecAddressLike, target: AztecAddressLike, token_in: AztecAddressLike, token_out: AztecAddressLike, relayer: AztecAddressLike, bonding_token: AztecAddressLike, bonding_amount: FieldLike, he_pub_key: FieldLike, sk_hash: FieldLike, interval: FieldLike, he_secret_key: FieldLike) {
    return new DeployMethod<BatcherVaultContract>(publicKey, wallet, BatcherVaultContractArtifact, BatcherVaultContract.at, Array.from(arguments).slice(2));
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof BatcherVaultContract['methods']>(
    opts: { publicKey?: PublicKey; method?: M; wallet: Wallet },
    ...args: Parameters<BatcherVaultContract['methods'][M]>
  ) {
    return new DeployMethod<BatcherVaultContract>(
      opts.publicKey ?? Point.ZERO,
      opts.wallet,
      BatcherVaultContractArtifact,
      BatcherVaultContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? 'constructor',
    );
  }
  

  
  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return BatcherVaultContractArtifact;
  }
  

  
    public static get storage(): ContractStorageLayout<'admin' | 'target' | 'token_out' | 'token_in' | 'current_round' | 'batch_relayer' | 'rounds' | 'deposit_notes'> {
      return {
        admin: {
          slot: new Fr(1n),
          typ: "PublicImmutable<AztecAddress>",
        }
      ,
target: {
          slot: new Fr(2n),
          typ: "SharedImmutable<AztecAddress>",
        }
      ,
token_out: {
          slot: new Fr(3n),
          typ: "SharedImmutable<AztecAddress>",
        }
      ,
token_in: {
          slot: new Fr(4n),
          typ: "SharedImmutable<AztecAddress>",
        }
      ,
current_round: {
          slot: new Fr(5n),
          typ: "PublicMutable<Field>",
        }
      ,
batch_relayer: {
          slot: new Fr(6n),
          typ: "PublicMutable<BatchRelayer>",
        }
      ,
rounds: {
          slot: new Fr(7n),
          typ: "Map<Field, PublicMutable<Round>>",
        }
      ,
deposit_notes: {
          slot: new Fr(8n),
          typ: "Map<AztecAddress, PrivateMutable<DepositNote>>",
        }
      
      } as ContractStorageLayout<'admin' | 'target' | 'token_out' | 'token_in' | 'current_round' | 'batch_relayer' | 'rounds' | 'deposit_notes'>;
    }
    

  
  public static get notes(): ContractNotes<'DepositNote'> {
    const notes = this.artifact.outputs.globals.notes ? (this.artifact.outputs.globals.notes as any) : [];
    return {
      DepositNote: {
        id: new Fr(6810111211111510511678111116101n),
      }
    
    } as ContractNotes<'DepositNote'>;
  }
  

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public methods!: {
    
    /** get_batch_relayer() */
    get_batch_relayer: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_token_out() */
    get_token_out: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** cancel_batch_and_claim(current_round: field, secret_hash: field) */
    cancel_batch_and_claim: ((current_round: FieldLike, secret_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** deposit_to_batch(current_round: field, amount_out: field, relayer_he_pubkey: field, he_add_rand: field, nonce: field) */
    deposit_to_batch: ((current_round: FieldLike, amount_out: FieldLike, relayer_he_pubkey: FieldLike, he_add_rand: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_sk_hash(he_secret_key: field) */
    get_sk_hash: ((he_secret_key: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** compute_note_hash_and_nullifier(contract_address: struct, nonce: field, storage_slot: field, note_type_id: field, serialized_note: array) */
    compute_note_hash_and_nullifier: ((contract_address: AztecAddressLike, nonce: FieldLike, storage_slot: FieldLike, note_type_id: FieldLike, serialized_note: FieldLike[]) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** dipute_relayer(he_secret_key: field, new_sk_hash: field, new_he_pub_key: field, new_he_secret_key: field, new_relayer: struct, secret_hash: field, nonce: field) */
    dipute_relayer: ((he_secret_key: FieldLike, new_sk_hash: FieldLike, new_he_pub_key: FieldLike, new_he_secret_key: FieldLike, new_relayer: AztecAddressLike, secret_hash: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** claim_token_in(round: field, total_token_in: field, total_token_out: field) */
    claim_token_in: ((round: FieldLike, total_token_in: FieldLike, total_token_out: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_encrypted_sum(current_round: field) */
    get_encrypted_sum: ((current_round: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** execute_batch(encrypted_amount: array, secret_key: field, token_out_amount_cancelled: field, input_asset_bridge: struct, output_asset_bridge: struct, nonce_for_transfer_approval: field, uniswap_fee_tier: field, minimum_output_amount: field, secret_hash_for_L1_to_l2_message: field, caller_on_L1: struct, nonce_for_swap_approval: field) */
    execute_batch: ((encrypted_amount: FieldLike[], secret_key: FieldLike, token_out_amount_cancelled: FieldLike, input_asset_bridge: AztecAddressLike, output_asset_bridge: AztecAddressLike, nonce_for_transfer_approval: FieldLike, uniswap_fee_tier: FieldLike, minimum_output_amount: FieldLike, secret_hash_for_L1_to_l2_message: FieldLike, caller_on_L1: EthAddressLike, nonce_for_swap_approval: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** spend_public_authwit(inner_hash: field) */
    spend_public_authwit: ((inner_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** finalize_execute(secret_hash_for_redeeming_minted_notes: field, amount: field, secret_for_L1_to_L2_message_consumption: field) */
    finalize_execute: ((secret_hash_for_redeeming_minted_notes: FieldLike, amount: FieldLike, secret_for_L1_to_L2_message_consumption: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** check_sk_hash(sk_hash: field) */
    check_sk_hash: ((sk_hash: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_round() */
    get_round: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** stake(relayer: struct, token: struct, amount: field, nonce: field) */
    stake: ((relayer: AztecAddressLike, token: AztecAddressLike, amount: FieldLike, nonce: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_admin() */
    get_admin: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_target_address() */
    get_target_address: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** constructor(admin: struct, target: struct, token_in: struct, token_out: struct, relayer: struct, bonding_token: struct, bonding_amount: field, he_pub_key: field, sk_hash: field, interval: field, he_secret_key: field) */
    constructor: ((admin: AztecAddressLike, target: AztecAddressLike, token_in: AztecAddressLike, token_out: AztecAddressLike, relayer: AztecAddressLike, bonding_token: AztecAddressLike, bonding_amount: FieldLike, he_pub_key: FieldLike, sk_hash: FieldLike, interval: FieldLike, he_secret_key: FieldLike) => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;

    /** get_token_in() */
    get_token_in: (() => ContractFunctionInteraction) & Pick<ContractMethod, 'selector'>;
  };
}
