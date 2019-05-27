import React from 'react';
import MaterialTable from 'material-table';

export default function AdminContestList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Titre', field: 'name' },
      { title: 'fichier attendu', field: 'leRendu' },
      { title: 'Description', field: 'description' },
      { title: 'Date de creation', field: 'date', type: 'date' },
      { title: 'Date de fin', field: 'dateEnd', type: 'date' },
      { title: 'Delai', field: 'delai', type: 'numeric' },
       { title: 'Winner', field: 'winner'},
      {
        title: 'Jurys',
        field: 'jury',
        lookup: { 34: 'Amal', 63: 'TOURE' },
      },
    ],
    data: [
      { name: 'Mehmet', leRendu: 'APK avec pdf dans un zip',description:"alors on doit normalement mettre une  description ici pour mieux decrire le proble ela solution attenducolumns: title: string; field: string; type undefined; lookupundefined;title: string; field: string; type: string; lookup undefined; title: string; field: string; lookup: 34: string; 63: stringtype?: undefined;",
      date:1987,dateEnd:"15/09/2000", delai:15 , jury: 63 },
      {
        name: 'Zerya Betül',
        leRendu: 'APK avec pdf dans un zip',
        description:"alors on doit normalement mettre une  description ici pour mieux decrire le proble ela solution attendu",
        date:1987,
        dateEnd:2000,
        delai: 17,
        jury: 34,
      },
    ]
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
