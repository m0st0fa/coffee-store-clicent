
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const handleDetete = () => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cfo => cfo._id !== _id) 
                            setCoffees(remaining)
                        }
                    })
            }
        })
    }
    const { photo, _id } = coffee
    return (
        <div className="">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-full h-80" src={photo} alt="Movie" /></figure>
                <div className="card-body ">
                    <div className="card-actions justify-end">
                        <div className="join join-vertical">
                            <button className="btn">Button</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn">Update</button>
                            </Link>
                            <button
                                onClick={() => handleDetete(_id)}
                                className="btN bg-orange-500">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;