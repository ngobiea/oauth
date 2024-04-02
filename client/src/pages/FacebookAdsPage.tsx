import {
  JsonView,
  allExpanded,
  // darkStyles,
  defaultStyles,
} from 'react-json-view-lite';
import { useAppSelector } from '../store/hooks';

const FacebookAdsPage = () => {
  const { profile } = useAppSelector((state) => state.facebook);

  return (
    <div className='mt-20'>
      {!profile ? (
        <div className='mt-20'>
          <h1>Facebook Page</h1>
        </div>
      ) : (
        <div>
          <JsonView
            data={profile}
            shouldExpandNode={allExpanded}
            style={defaultStyles}
          />
        </div>
      )}
    </div>
  );
};
export default FacebookAdsPage;
