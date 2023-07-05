import React from 'react';
import {Table} from 'react-bootstrap';
import projects from '../projects';
import {Link} from 'react-router-dom';

const HomeScreen = () => {
  return (
    <>
      <h5>Latest Projects</h5>
      <Table
        striped
        hover
        responsive
        className='table-sm my-3'
      >
        <thead>
          <tr>
            <th>SPAL NUMBER</th>
            <th>PROJECT NUMBER</th>
            <th>TYPE CHARTER</th>
            <th>SHIPPER</th>
            <th>TUG BOAT</th>
            <th>PIC</th>
            <th>SALES</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project._id}>
              <td>
                <Link
                  to={`/project/${project._id}`}
                >
                  {project.spal_number}
                </Link>
              </td>
              <td>
                <Link
                  to={`/project/${project._id}`}
                >
                  {project.project_number}
                </Link>
              </td>
              <td>{project.type_charter}</td>
              <td>{project.shipper}</td>
              <td>{project.tug_boat}</td>
              <td>{project.pic}</td>
              <td>{project.sales}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default HomeScreen;
