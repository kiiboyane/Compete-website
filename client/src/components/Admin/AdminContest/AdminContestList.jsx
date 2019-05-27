import React from 'react';
import MaterialTable from 'material-table';

export default function AdminContest() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Titre', field: 'name' },
      { title: 'Le Rendu', field: 'leRendu' },
      { title: 'Date de creation', field: 'date', type: 'date' },
      { title: 'Delai', field: 'delai en jour', type: 'numeric' },
      
      {
        title: 'Jurys',
        field: 'jury',
        lookup: { 34: 'Amal', 63: 'TOURE' },
      },
    ],
    data: [
      { name: 'Mehmet', leRendu: 'Baran',date:1987, delai:15 , jury: 63 },
      {
        name: 'Zerya Betül',
        leRendu: 'Baran',
        date:1987,
        delai: 17,
        jury: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Administration des problemes"
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
            }, 600);
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
