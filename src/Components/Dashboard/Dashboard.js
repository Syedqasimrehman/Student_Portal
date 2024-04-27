// import ImageDropzone from "../Teachers/ImageUploader";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard flex m-0 bg-slate-400">
        <table>
          <thead>
            <tr className="tr-head">
              <th className="">ID</th>
              <th>Teacher Name</th>
              <th>Description</th>
              <th>Subject</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr-body">
              <td>id</td>
              <td>name</td>
              <td>description</td>
              <td>subject</td>
              <td>semester</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
