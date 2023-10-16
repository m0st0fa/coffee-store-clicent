/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {name, taste, category, quantity, supplier, details, photo,_id} = coffee;
    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const taste = form.taste.value
        const supplier = form.supplier.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const newCoffee = { name, taste, category, quantity, supplier, details, photo }
        console.log(newCoffee)
        // sent data to the server 
        fetch(`http://localhost:4000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                    )
                }
            })

    }


    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h1 className="text-3xl font-extrabold ">Update coffee:{name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row  */}
                <div className=" md:flex ">
                    <div className="form-control md: w-full">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Coffe Name" className=" input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 ">
                        <label className="label">
                            <span className="label-text">quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="quantity" defaultValue={quantity} name="quantity" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* supplier and taste row  */}
                <div className=" md:flex ">
                    <div className="form-control md: w-full">
                        <label className="label">
                            <span className="label-text">supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="supplier Name" className=" input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 ">
                        <label className="label">
                            <span className="label-text">taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Test" defaultValue={taste}  name="taste" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* category and details */}
                <div className=" md:flex ">
                    <div className="form-control md: w-full">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" defaultValue={category}  placeholder="category Name" className=" input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4 ">
                        <label className="label">
                            <span className="label-text">details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="details " defaultValue={details}  name="details" className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                {/* photo url  */}
                <div className=" md:flex ">
                    <div className="form-control md: w-full">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" defaultValue={photo}  placeholder="Phot URL" className=" input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="my-10">
                    <input type="submit" name="" className="btn btn-block bg-orange-600 text-white" />
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;