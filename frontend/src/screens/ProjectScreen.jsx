import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import {Table} from 'react-bootstrap';
import axios from 'axios';

const ProjectScreen = () => {
  const [project, setProject] = useState({});

  const {id: projectId} = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const {data} = await axios.get(
        `/api/projects/${projectId}`
      );
      setProject(data);
    };
    fetchProject();
  }, [projectId]);

  return (
    <div>
      <h5 className='font-bold'>
        Project {project.project_number} detail
      </h5>
      <Table
        bordered
        hover
        responsive
        className='mt-4'
        size='sm'
      >
        <tbody>
          <tr>
            <td className='p-2'>Date</td>
            <td className='p-2'>{project._id}</td>
          </tr>
          <tr>
            <td className='p-2'>Type Charter</td>
            <td className='p-2'>
              {project.type_charter}
            </td>
          </tr>
          <tr>
            <td className='p-2'>
              Shipping Instruction Date
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>Laycan</td>
            <tr>
              <td className='p-2'>Start</td>
              <td className='p-2'></td>
            </tr>
            <tr>
              <td className='p-2'>Finish</td>
              <td className='p-2'></td>
            </tr>
          </tr>
          <tr>
            <td className='p-2'>
              Project Number
            </td>
            <td className='p-2'>
              {project.project_number}
            </td>
          </tr>
          <tr>
            <td className='p-2'>PIC</td>
            <td className='p-2'>{project.pic}</td>
          </tr>
          <tr>
            <td className='p-2'>Sales</td>
            <td className='p-2'>
              {project.sales}
            </td>
          </tr>
          <tr>
            <td className='p-2'>Shipper</td>
            <td className='p-2'>
              {project.shipper}
            </td>
          </tr>
          <tr>
            <td className='p-2'>PIC Shipper</td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>Tug Boat</td>
            <td className='p-2'>
              {project.tug_boat}
            </td>
          </tr>
          <tr>
            <td className='p-2'>Barge</td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Cargo On Board
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Port Of Loading
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Port Of Discharge
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Freight/MT (IDR)
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Freight/MT (USD)
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Total Freight (IDR)
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>
              Total Freight (USD)
            </td>
            <td className='p-2'></td>
          </tr>
          <tr>
            <td className='p-2'>SPAL Number</td>
            <td className='p-2'></td>
          </tr>
        </tbody>
      </Table>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
    </div>
  );
};

export default ProjectScreen;
