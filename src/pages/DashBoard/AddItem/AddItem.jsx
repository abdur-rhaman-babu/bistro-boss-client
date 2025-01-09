import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="md:flex items-center gap-5 w-full">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select defaultValue='default'
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option disabled value='default'>Select a catewgory?</option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              {...register("price")}
              placeholder="Price"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-44 resize-none"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="form-control w-full my-5">
          <input {...register('image')} type="file" className="file-input w-full max-w-xs" />
        </div>

        <button className="bg-gradient-to-r text-white font-semibold to-[#b07d2f] from-[#876024] items-center gap-2 py-3 px-6 rounded-lg flex">
          <input type="submit" value="Add Item" />
          <FaUtensils />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
