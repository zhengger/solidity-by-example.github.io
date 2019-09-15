const html = `<p>One dollar is equal to 100 cent.</p>
<p>Similarly, One <code>Ether</code> is equal to 10^18 <code>wei</code>.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.3;

contract Wei {
  uint public oneEther = 1 ether;
  uint public oneWei = 1 wei;

  function testOneEther() public pure returns (bool) {
    return 1 ether == 1e18 wei;
  }

  function testOneWei() public pure returns (bool) {
    return 1 wei == 1;
  }
}
</code></pre>
`

export default html