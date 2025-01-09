import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../components/useMenu/useMenu";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();
  const handleDeleteMenuItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch()
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div>
      <SectionTitle subHeading="Hurry Up" heading="Manage all tiems" />
      <div className="overflow-x-auto">
        <table className="table border">
          {/* head */}
          <thead className="bg-yellow-600 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button className="text-xl bg-yellow-400 text-white p-2 rounded-lg">
                    <FaEdit />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteMenuItem(item)}
                    className="text-xl bg-red-600 text-white p-2 rounded-lg"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItem;
