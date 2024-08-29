import { useNavigate } from "react-router-dom";

function Dealer() {
  const dealers = [
    {
      id: 1,
      name: "Dealer Name 1",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
    {
      id: 2,
      name: "Dealer Name 2",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
    {
      id: 3,
      name: "Dealer Name 3",
      phone: "000-000-0000",
      mail: "@twitter",
      Dob: "DD/MM/YYYY",
      aadharnum: "0000-0000-0000",
      aadharimg: "pdf",
      pancardnum: "ddddd",
      pancardimg: "pdf",
      drivingnum: "dddd",
      drivingimg: "pdf",
      vehiclenum: "num000",
      vehicletype: "2 wheeler",
      banknum: "000000",
      ifsc: "IFSCcode",
      bankuser: "acc user Name",
      address: "address",
      city: "city",
      state: "state",
      postcode: "000 000",
      nationality: "nationality",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="card-box">
        <table className="table">
          <thead>
            <tr>
              <th>No:</th>
              <th>Dealer Name:</th>
              <th>Phone Number:</th>
              <th>Mail ID:</th>
            </tr>
          </thead>
          <tbody>
            {dealers.map((dealer) => (
              <tr key={dealer.id}>
                <th scope="row">{dealer.id}</th>
                <td
                  className="dealername"
                  onClick={() =>
                    navigate("/dealerdetail", { state: { dealer } })
                  }
                >
                  {dealer.name}
                </td>
                <td>{dealer.phone}</td>
                <td>{dealer.mail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dealer;
