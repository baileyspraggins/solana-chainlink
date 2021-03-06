import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaChainlink } from "../target/types/solana_chainlink";

describe("solana-chainlink", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaChainlink as Program<SolanaChainlink>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
