// AdminPanel.js
import React, { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';
import SideBar from './SideBar';
import FilterOptions from './FilterOptions';
import ConversationList from './ConversationList';
import LogoutButton from './authentication/LogoutButton';
import AnalyticsPage from './AnalyticsPage';

function AdminPanel({setIsAuthenticated, isAuthenticated}) {
    // State for search query
    const [searchQuery, setSearchQuery] = useState('');
    
    // State for filter options
    const [filter, setFilter] = useState('All');

    // Update search query based on user input
    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    // Update filter based on user selection
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
    };
    
    const handleTagCreation = (conversationId, tag) => {
      // Here, you'd ideally update your backend data.
      // For the sake of this example, you could update your frontend "database"
      // or simulate the tagging with a local state.
    };

    const [activeTab, setActiveTab] = useState('conversations'); 
  
    return (
      <div className='inline-flex w-screen bg-gray-300 dark:bg-slate-800'>
        <nav className='inline-block h-full w-max bg-inherit'>
          <ul className="inline-block mx-10 space-x-1 space-y-4 mt-4 ">
              {/* Tab for Conversations */}
              <li
                className={`cursor-pointer ${
                  activeTab === 'conversations' ? 'text-blue-500 my-5' : 'my-5'
                }`}
                onClick={() => setActiveTab('conversations')}
              >
                Conversations
              </li>
              {/* Tab for Analytics */}
              <li
                className={`cursor-pointer ${
                  activeTab === 'analytics' ? 'text-blue-500 my-5' : 'my-5'
                }`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </li>
              <li className='my-5 w-max'>
                <DarkModeToggle/>
              </li>
              <li className='my-5'>
                <LogoutButton setIsAuthenticated={setIsAuthenticated}/>
              </li>
            </ul>
        </nav>
        <div className="bg-gray-200 dark:bg-slate-900 dark:text-white min-h-screen dark:transition-colors dark:duration-300 transition-colors duration-300 ease-in-out dark:ease-in-out w-full">
          <h1 className="text-center text-3xl py-4">Administrator Panel</h1>
          {/* <DarkModeToggle/>
          <LogoutButton setIsAuthenticated={setIsAuthenticated}/> */}
          {/* Render the appropriate tab content */}
          {activeTab == 'conversations' ? (
            <>
              <SearchBar onSearch={setSearchQuery} />
              <FilterOptions onFilter={setFilter} />
              {/* Simple tag creation mockup */}
              <div className="p-4 mx-10">
                <input type="text" placeholder="Conversation ID" className="border p-2 rounded mr-2" />
                <input type="text" placeholder="New Tag" className="border p-2 rounded mr-2" />
                <button className="bg-green-500 dark:text-white p-2 rounded" onClick={() => handleTagCreation()}>Add Tag</button>
              </div>
              <ConversationList searchQuery={searchQuery} filter={filter} />
            </>
          ):(
            <>
              <AnalyticsPage />
            </>
          )}
        </div>
      </div>
    );
  }
  
export default AdminPanel;