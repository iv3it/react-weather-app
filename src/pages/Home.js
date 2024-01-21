import SearchBar from "../components/SearchBar";
import MainInfo from "../components/MainInfo";
import ConditionBoxes from "../components/ConditionBoxes";
import NextHours from "../components/NextHours";
import NextDays from "../components/NextDays";
import { useGetDailyAndHourlyQuery, useGetCurrentDataQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';


const Home = () => {
  const { lat, lon } = useSelector(state => state.coordinates);
  const {
    data2,
    isLoading2,
    isSuccess2,
    isError2,
    error2
  } = useGetCurrentDataQuery({lat, lon});
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDailyAndHourlyQuery({lat, lon});

  return (
    <div className="container mx-auto px-4 py-4">
      <div className='max-w-screen-lg mx-auto'>
        <SearchBar />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
            <div className="col-span-1 lg:col-span-2">
              <MainInfo />
              <NextHours />
              <NextDays />
            </div>
            <div className="col-span-1">
              <ConditionBoxes />
            </div>
          </div>
      </div>
    </div>
  );
}

export default Home;