import { createContext } from 'react';

const ChainContext = createContext<{ selectedChain: string; setSelectedChain: (chain: string) => void }>({
  selectedChain: '',
  setSelectedChain: () => {}
});

export default ChainContext;