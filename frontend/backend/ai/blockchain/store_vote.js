// Simple vote storage simulation (demo)
const crypto = require("crypto");

function storeVote(vote) {
  const block = {
    vote,
    timestamp: new Date().toISOString(),
    hash: crypto.randomBytes(20).toString("hex")
  };
  // In a real blockchain we'd write to chain; here we return a simulated block
  return block;
}

// Demo run
if (require.main === module) {
  console.log(storeVote("SampleCandidate"));
}

module.exports = { storeVote };
