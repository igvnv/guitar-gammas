import Fret from './Fret';

export type GammaId = number;

type Gamma = {
  id?: GammaId;
  name: string;
  frets: Fret[];
};

export default Gamma;
