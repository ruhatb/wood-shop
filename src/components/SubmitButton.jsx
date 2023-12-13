
import { useNavigation } from 'react-router-dom';



const SubmitButton = ({text}) => {

 
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"
       

  return (
   
      <button type="submit" className='btn btn-accent btn-block' disabled={isSubmitting}>
        { 
        isSubmitting? <> 
          <span className="loading loading-spinner loading-sm"></span>
        sending..
        </> : text
        }
      </button>
   
  );
};
export default SubmitButton;
