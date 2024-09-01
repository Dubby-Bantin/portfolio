import React, { useState, useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import 'instantsearch.css/themes/algolia.css';

const searchClient = algoliasearch('DFP765ROR0', 'f4585fa41dad89921664a40811fc24cc');

const Hit = ({ hit }: any) => (
  <div className="p-4 border-b border-gray-300 dark:border-gray-700">
    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
      <Highlight attribute="title" hit={hit} />
    </h2>
    <p className="text-gray-600 dark:text-gray-400">
      <Highlight attribute="content" hit={hit} />
    </p>
  </div>
);

const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black-100 bg-opacity-50 flex justify-center items-center z-50">
          <div className=" dark:bg-[#050112] w-full max-w-lg rounded-lg shadow-lg p-6">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-gray-700"
            >
              ESC
            </button>
            <InstantSearch searchClient={searchClient} indexName="YOUR_INDEX_NAME">
              <SearchBox
                className="bg-black-100"
                translations={{ placeholder: 'Search documentation...' }}
              />
              <div className="mt-4">
                <Hits hitComponent={Hit} />
              </div>
            </InstantSearch>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
