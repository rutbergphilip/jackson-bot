import { AssignmentChoices } from '../constants/assignments.enum';

export function formatWord(word: AssignmentChoices) {
  if (word === AssignmentChoices.HTML || word === AssignmentChoices.CSS) {
    return word.toUpperCase();
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}
