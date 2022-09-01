import { Images } from '../constants/images.enum';
import { AssignmentChoices } from './../constants/assignments.enum';

export function getCorrespondingImage(assignment: AssignmentChoices): Images {
  const [, value] = Object.entries(AssignmentChoices).find(
    ([key]) => key.toLowerCase() === assignment.toLowerCase()
  ) as [string, AssignmentChoices];

  return (
    Object.entries(Images).find(
      ([key]) => key.toLowerCase() === value.toLowerCase()
    ) as [string, Images]
  )[1];
}
