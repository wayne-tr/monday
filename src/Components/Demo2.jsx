import { useFormik } from "formik";
import * as Yup from 'yup';

export const Demo2 = () => {
  const {handleSubmit, handleChange, errors} = useFormik({
    initialValues: {
        mail: "",
    },
    onSubmit: (values) => {alert(values.mail)},
    validationSchema: Yup.object({
      mail: Yup.string().required("No empty"),
    })
});
  return (
    <div><form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input onChange={handleChange} name="mail" type="text" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <small className="text-red-800">{errors.mail}</small>
            <button type="submit" className="py-2 px-5 rounded bg-black text-white">Confirm</button>
          </div>
        </form>
    </div>
  )
}
