/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Star from './Star.tsx';

type RatingProps = {
  setRating: any;
};

export default function Rating({ setRating }: RatingProps) {
  return (
    <div className="rating">
      <div className="rating__stars" onChange={setRating}>
        {[...Array(10)]
          .map((_item, index) => <Star key={index + 1} value={index + 1} />)
          .reverse()}
      </div>
    </div>
  );
}
