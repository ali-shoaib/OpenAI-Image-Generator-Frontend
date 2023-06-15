import React,{useState} from 'react';
import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import FormField from '../components/FormField';
import Loader from '../components/loader';
import {useNavigate} from 'react-router-dom';

function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
      prompt: '',
      photo: '',
      size:''
  });

  const handleSizeChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const options = ['disabled','small','medium','large'];

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
      const randomPrompt = getRandomPrompt(form.prompt);
      setForm({ ...form, prompt: randomPrompt });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      if(form.prompt && form.photo){
        setLoading(true);

        try {
          const response = await fetch('http://localhost:786/api/v1/upload-image',
          {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({prompt:form.prompt, photo: form.photo})
          })

        await response.json();

        navigate("/");
        } catch (error) {
          alert(error);
        }
        finally{
          setLoading(false);
        }
      }
      else{
        alert("Please enter a prompt");
      }
  }

  const generateImage = async () => {
    if(form.prompt){
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:786/api/v1/generate-image',
        {
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({prompt:form.prompt, size: form.size})
        })

        const data = await response.json();

        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`});
        
      } catch (error) {
        alert(error);
        console.log("Error => ",error);
      }
      finally{
        setGeneratingImg(false);
      }
    }
    else{
      alert("Please enter a prompt");
    }
  }
  return (
    <div className='createpost_container'>
      <div>
        <h1>Create</h1>
        <p>Generate an imaginative image through DALL-E AI and share it with the community.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <FormField
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          value={form.prompt}
          size={form.size}
          handleChange={handleChange}
          isSurpriseMe
          options={options}
          handleSurpriseMe={handleSurpriseMe}
          handleSizeChange={handleSizeChange}
        />

        <div className="ai_image_container">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              style={{width:'100%'}}
            />
          ) : (
            <img
              src={preview}
              alt="preview"
              style={{'width': '500px','maxWidth': '100%'}}
            />
          )}

          {generatingImg && (
            <div>
              <Loader text="Generating..." />
            </div>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={generateImage}
            className="generate_btn"
            disabled={generatingImg}
          >
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className='share_container'>
          <p className="mt-2">** Once you have created the image you want, you can share it with others in the community **</p>
          <button
            type="submit"
            className="share_btn"
            disabled={loading}
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePost