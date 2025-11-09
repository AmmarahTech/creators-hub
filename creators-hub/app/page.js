// app/page.js
'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, ShoppingBag, Ticket, Lightbulb, Music, Palette, Mic, Video, Search, Heart, Clock, Moon, Sun } from 'lucide-react';

export default function CreatorsHub() {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(true);

  const categories = [
    { id: 'all', label: 'All Creators', icon: Users },
    { id: 'musicians', label: 'Musicians', icon: Music },
    { id: 'artists', label: 'Artists', icon: Palette },
    { id: 'comedians', label: 'Comedians', icon: Mic },
    { id: 'influencers', label: 'Influencers', icon: Video }
  ];

  const creators = [
    {
      id: 1,
      name: 'Sarah Jazz',
      category: 'musicians',
      image: '🎵',
      followers: '124K',
      nextEvent: 'Live Jazz Night - Dec 15',
      location: 'Dar es Salaam',
      hasTickets: true,
      hasMerch: true
    },
    {
      id: 2,
      name: 'Marcus Paint',
      category: 'artists',
      image: '🎨',
      followers: '89K',
      nextEvent: 'Gallery Opening - Dec 20',
      location: 'Arusha',
      hasTickets: true,
      hasMerch: true
    },
    {
      id: 3,
      name: 'Jamie Laughs',
      category: 'comedians',
      image: '😄',
      followers: '156K',
      nextEvent: 'Stand-Up Special - Dec 18',
      location: 'Dodoma',
      hasTickets: true,
      hasMerch: false
    },
    {
      id: 4,
      name: 'Alex Vibe',
      category: 'influencers',
      image: '📱',
      followers: '342K',
      nextEvent: 'Meet & Greet - Dec 22',
      location: 'Dar es Salaam',
      hasTickets: true,
      hasMerch: true
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Summer Music Festival',
      date: 'Dec 15, 2025',
      type: 'Live Show',
      attendees: 234,
      price: '45,000 TSH',
      location: 'Dar es Salaam'
    },
    {
      id: 2,
      title: 'Art & Wine Night',
      date: 'Dec 18, 2025',
      type: 'Fan Meetup',
      attendees: 67,
      price: 'Free',
      location: 'Arusha'
    },
    {
      id: 3,
      title: 'Comedy Jam Session',
      date: 'Dec 20, 2025',
      type: 'Collaborative',
      attendees: 145,
      price: '30,000 TSH',
      location: 'Dodoma'
    }
  ];

  const collaborativeProjects = [
    {
      id: 1,
      title: 'City Mural Project',
      creators: ['Marcus Paint', '3 Artists'],
      seeking: 'Local artists',
      deadline: '2 weeks',
      location: 'Arusha'
    },
    {
      id: 2,
      title: 'Charity Concert Series',
      creators: ['Sarah Jazz', '5 Musicians'],
      seeking: 'Venues & Sponsors',
      deadline: '1 month',
      location: 'Dar es Salaam'
    }
  ];

  const filteredCreators = selectedCategory === 'all' 
    ? creators 
    : creators.filter(function(c) { return c.category === selectedCategory; });

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-black transition-all duration-500">
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-blue-500 dark:to-blue-600 rounded-xl flex items-center justify-center shadow-md transform hover:scale-105 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Creator's Hub
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search creators, events..."
                    className="pl-10 pr-4 py-2 w-64 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <button
                  onClick={function() { setDarkMode(!darkMode); }}
                  className="p-2.5 rounded-lg bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                
                <button className="px-5 py-2.5 bg-purple-500 dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </header>

        <nav className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'discover', label: 'Discover', icon: Users },
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'merchandise', label: 'Merch', icon: ShoppingBag },
                { id: 'collaborate', label: 'Collaborate', icon: Lightbulb }
              ].map(function(tab) {
                return (
                  <button
                    key={tab.id}
                    onClick={function() { setActiveTab(tab.id); }}
                    className={'flex items-center space-x-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-300 ' + (
                      activeTab === tab.id
                        ? 'text-purple-600 dark:text-blue-500 border-b-2 border-purple-500 dark:border-blue-500 bg-purple-50 dark:bg-gray-900'
                        : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900'
                    )}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-4 py-8">
          {activeTab === 'discover' && (
            <div>
              <div className="mb-8">
                <h2 className="text-gray-900 dark:text-white text-xl font-bold mb-4">Browse by Category</h2>
                <div className="flex flex-wrap gap-3">
                  {categories.map(function(cat) {
                    return (
                      <button
                        key={cat.id}
                        onClick={function() { setSelectedCategory(cat.id); }}
                        className={'flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ' + (
                          selectedCategory === cat.id
                            ? 'bg-purple-500 dark:bg-blue-600 text-white shadow-md'
                            : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-sm'
                        )}
                      >
                        <cat.icon className="w-4 h-4" />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredCreators.map(function(creator) {
                  return (
                    <div 
                      key={creator.id} 
                      className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-6xl hover:scale-105 transition-transform duration-500">
                        {creator.image}
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-1">{creator.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{creator.followers} followers</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-start space-x-2 text-sm">
                            <Calendar className="w-4 h-4 text-purple-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{creator.nextEvent}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <MapPin className="w-4 h-4 text-purple-500 dark:text-blue-400 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300">{creator.location}</span>
                          </div>
                        </div>

                        <div className="flex space-x-2 mb-3">
                          {creator.hasTickets && (
                            <span className="flex items-center space-x-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-medium border border-green-200 dark:border-green-800">
                              <Ticket className="w-3 h-3" />
                              <span>Tickets</span>
                            </span>
                          )}
                          {creator.hasMerch && (
                            <span className="flex items-center space-x-1 px-2 py-1 bg-purple-100 dark:bg-blue-900/30 text-purple-700 dark:text-blue-400 rounded-lg text-xs font-medium border border-purple-200 dark:border-blue-800">
                              <ShoppingBag className="w-3 h-3" />
                              <span>Merch</span>
                            </span>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          <button className="flex-1 px-3 py-2 bg-purple-500 dark:bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                            View Profile
                          </button>
                          <button className="px-3 py-2 bg-gray-100 dark:bg-gray-900 text-purple-600 dark:text-blue-400 rounded-lg border border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                            <Heart className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'events' && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-gray-900 dark:text-white text-2xl font-bold">Upcoming Events</h2>
                <button className="px-5 py-2.5 bg-purple-500 dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-sm">
                  Create Event
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {upcomingEvents.map(function(event) {
                  return (
                    <div 
                      key={event.id} 
                      className="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-gray-900 dark:text-white font-bold text-lg mb-2">{event.title}</h3>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm mb-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
                            <Users className="w-4 h-4" />
                            <span>{event.attendees} attending</span>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-blue-900/30 text-purple-700 dark:text-blue-400 rounded-full text-xs font-medium border border-purple-200 dark:border-blue-800">
                          {event.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">{event.price}</span>
                        <button className="px-4 py-2 bg-purple-500 dark:bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                          Get Tickets
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-600 dark:to-blue-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-white font-bold text-xl mb-2">Host Your Own Event</h3>
                <p className="text-white/90 mb-4">Turn your digital following into real-world experiences. Book venues, sell tickets, and connect with fans.</p>
                <button className="px-6 py-2.5 bg-white text-purple-600 dark:text-blue-600 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Start Planning
                </button>
              </div>
            </div>
          )}

          {activeTab === 'merchandise' && (
            <div>
              <div className="mb-6">
                <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">Creator Merchandise</h2>
                <p className="text-gray-600 dark:text-gray-400">Support your favorite creators with exclusive physical products</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(function(i) {
                  return (
                    <div 
                      key={i} 
                      className="bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-4xl hover:scale-105 transition-transform duration-500">
                        👕
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-900 dark:text-white font-bold mb-1">Limited Edition Tee</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">by Sarah Jazz</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-900 dark:text-white font-bold text-lg">29,999 TSH</span>
                          <button className="px-3 py-1.5 bg-purple-500 dark:bg-blue-600 text-white rounded-lg text-sm hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'collaborate' && (
            <div>
              <div className="mb-6">
                <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-2">Collaborative Projects</h2>
                <p className="text-gray-600 dark:text-gray-400">Join forces with other creators for real-world impact</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {collaborativeProjects.map(function(project) {
                  return (
                    <div 
                      key={project.id} 
                      className="bg-white dark:bg-gray-950 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="mb-4">
                        <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Led by {project.creators[0]} + {project.creators[1]}</p>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{project.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>Seeking: {project.seeking}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{project.deadline}</span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full px-4 py-2.5 bg-purple-500 dark:bg-blue-600 text-white rounded-lg font-medium hover:bg-purple-600 dark:hover:bg-blue-700 hover:scale-105 transition-all duration-300">
                        Join Project
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-600 dark:to-blue-700 rounded-xl p-8 text-center shadow-lg">
                <Lightbulb className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold text-2xl mb-2">Start a Collaboration</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Have an idea for a project that brings creators together? Post your concept and find collaborators to make it happen in the real world.
                </p>
                <button className="px-8 py-3 bg-white text-purple-600 dark:text-blue-600 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Propose Project
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}