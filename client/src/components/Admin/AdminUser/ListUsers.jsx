import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Nom', field: 'name' },
      { title: 'Prenom', field: 'surname' },
      { title: 'Date de Naissance', field: 'birthYear', type: 'numeric' },
      {
        title: 'Langage de base',
        field: 'langage',
        lookup: { 34: 'java', 63: 'javascript',46:'C' },
      },
    ],
    data: [
      { name: 'Toure', surname: 'sidi', birthYear: 1987, langage: 46 },
      {
        name: 'Amal',
        surname: 'Baran',
        birthYear: 2017,
        langage: 34,
      },
      { name: 'Brahim', surname: 'marwan', birthYear: 1987, langage: 63 },
      {
        name: 'Konde T',
        surname: 'Elle',
        birthYear: 2017,
        langage: 34,
      },
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, langage: 46 },
      {
        name: 'humain Betül',
        surname: 'ladjii',
        birthYear: 2017,
        langage: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Administration des Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 6);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
