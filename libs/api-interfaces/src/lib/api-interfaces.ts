export interface Gangster {
  id: string;
  name: string;
  alias: string;
  mafiaRole: string;
  peopleWhacked: number;
  badTemper: boolean;
}

export const emptyGangster = {
  id: '',
  name: '',
  alias: '',
  mafiaRole: '',
  peopleWhacked: 0,
  badTemper: false,
};
