import React, {useState} from 'react'
import Link from 'next/link';
import ArtCard from './ArtCard';

const locations = [
  'NewYork',
  'LosAngeles',
  'Chicago',
  'Houston',
  'Philadelphia',
  'Phoenix',
  'SanAntonio',
  'SanDiego',
  'Dallas',
  'SanFrancisco',
  'London',
  'Manchester',
  'Birmingham',
  'Glasgow',
  'Liverpool',
  'Leeds',
  'Newcastle',
  'Bristol',
  'Sheffield',
  'Nottingham',
];

const artists = [
  {
    name: 'Anita Jane',
    location: 'Sydney, Australia',
    artType: 'Mural & Graffiti Artists',
  },
  {
    name: 'John Smith',
    location: 'New York, USA',
    artType: 'Street Artist',
  },
  {
    name: 'Sophie Davis',
    location: 'London, UK',
    artType: 'Installation Artist',
  },
  {
    name: 'Carlos Ramirez',
    location: 'Los Angeles, USA',
    artType: 'Digital Artist',
  },
  {
    name: 'Elena Rodriguez',
    location: 'Madrid, Spain',
    artType: 'Painter',
  },
  {
    name: 'Lucas Brown',
    location: 'Paris, France',
    artType: 'Sculptor',
  },
  {
    name: 'Maria Gonzalez',
    location: 'Mexico City, Mexico',
    artType: 'Photographer',
  },
  {
    name: 'Tom Wilson',
    location: 'Sydney, Australia',
    artType: 'Street Artist',
  },
  {
    name: 'Jasmine Lee',
    location: 'Sydney, Australia',
    artType: 'Mural & Graffiti Artists',
  },
  {
    name: 'Laura Davis',
    location: 'Los Angeles, USA',
    artType: 'Digital Artist',
  },
  {
    name: 'Nina Patel',
    location: 'Mumbai, India',
    artType: 'Painter',
  },
  {
    name: 'Paul Johnson',
    location: 'Berlin, Germany',
    artType: 'Sculptor',
  },
];



const BrowseByLocation = () => {

  const [selectedLocation, setSelectedLocation] = useState<string>("Sydney");
  
    // Extract unique city names from artists
  const uniqueCityNames = Array.from(new Set(artists.map((artist) => artist.location.split(',')[0].trim())));

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
  };

  return (
    <div className="px-[1rem] sm:px-[2rem] md:px-[5rem]">
        <div className='w-full flex justify-start flex-wrap gap-4 mt-[3rem]'>
            {uniqueCityNames.map((city, index) => (
              <button
                key={index}
                onClick={() => handleLocationClick(city)}
                className={`rounded-full shadow-lg border border-gray-300 px-3 py-2  ${
                  selectedLocation === city ? 'bg-[#333] text-white' : 'text-gray-900 bg-white hover:bg-gray-100'
                }`}
              >
                {city}
              </button>
            ))}
            </div>
            <div className='w-full grid grid-cols-3 gap-5 mt-[3rem]'> 
            {artists
        .filter((artist) => !selectedLocation || artist.location.split(',')[0].trim() === selectedLocation)
        .map((artist, index) => (
          <ArtCard key={index} artist={artist} />
        ))}
        </div>
    </div>
  )
}

export default BrowseByLocation