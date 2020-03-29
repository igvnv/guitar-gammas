import notes from '../constants/notes';
import strings from '../constants/strings';

type Note = typeof notes[number];
type GuitarString = typeof strings[number];

type Fret = {
  number: number;
  notes: {
    string: GuitarString;
    note: Note;
  }[];
};

export default Fret;
