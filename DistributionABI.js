// function getBonusCycleBalance() public view returns(uint256) {
// function getBonusCycleEligibleHolders() public view returns(uint256) {
// function getBonusCyclePayment() public view returns(uint256) {
// function getBonusCyclePercentage() public view returns(uint256) {
// function getBonusEligibleHolderCycle(address _wallet) public view returns(uint256) {
// function getBonusHolderLastWithdrawTime(address _wallet) public view returns(uint256) {
// function getBonusHoldersPaid() public view returns(uint256) {
// function getBonusHolderWithdrawn(address _wallet) public view returns(uint256) {
// function getBonusMinContractHold() public view returns(uint256) {
// function getBonusPercentage() public view returns(uint256) {
// function getCycleHoldersPaid() public view returns(uint256) {
// function getCycleProcessed() public view returns(uint256) {
// function getCycleTotalBonusPayments() public view returns(uint256) {
// function getCycleTotalGas() public view returns(uint256) {
// function getCycleTotalPayments() public view returns(uint256) {
// function getNumAuthorizedContracts() public view returns(uint256) {
// function getNumHolderBalance() public view returns(uint256) {

// These need arguments passed in:

// function getContractBalance(address _contract) public view returns(uint256) {
// function getContractCycleBalance(address _contract) public view returns(uint256) {
// function getContractHolderBalance(address _contract, address _wallet) public view returns(uint256) {
// function getContractHolderLastWithdrawal(address _contract, address _wallet) public view returns(uint256) {
// function getContractHolderPayable(address _contract, address _wallet) public view returns(uint256) {
// function getContractHolderWithdrawn(address _contract, address _wallet) public view returns(uint256) {
// function getContractMinimumBalance(address _contract) public view returns(uint256) {
// function getContractTotalSupply(address _contract) public view returns(uint256) {
// function getContractWithdrawn(address _contract) public view returns(uint256) {

const DISTRIBUTION_ABI = [
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ name: '', type: 'address' }],
        name: 'getAuthorizedContractPercent',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getCurrentCycle',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getTotalBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getTotalPayments',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getNumHolders',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'isPayOutEnabled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'isBonusEnabled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'isBonusPayoutEnabled',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getBonusBalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getTotalBonusPayments',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getNumBonusEligibleHolders',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getCurrentCycleIndex',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getBonusCyclePayment',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getBonusCyclePercentage',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'getTotalHoldersPaid',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        type: 'function',
    },
]