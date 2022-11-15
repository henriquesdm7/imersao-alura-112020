import { useState } from 'react'
import { StyledRegisterVideo } from './styles'

const useForm = ({ initialValues }) => {
    const [values, setValues] = useState(initialValues);

    return {
        values,
        handleChange: (e) => {
            const inputName = e.target.name;
            setValues({ ...values, [inputName]: e.target.value })
        },
        clearForm: () => setValues({})
    }
}

const checkThumb = ({ url }) => {
    const thumbRegex = /https:\/\/www\.youtube\.com\/watch\?v=([^&]+)/;
    const videoId = thumbRegex.exec(url);

    if (videoId && videoId.length > 1){
        return videoId[1]
    }
    return false;
}

const RegisterVideo = () => {
    const [formVisible, setFormVisible] = useState(false)
    const formRegister = useForm({
        initialValues: { title: '', url: '' }
    });
    const [thumbnail, setThumbnail] = useState(false);

    return (
        <StyledRegisterVideo>
            <button
                type='button'
                className="add-video"
                onClick={() => setFormVisible(true)}
            >
                +
            </button>
            {formVisible && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    setThumbnail(checkThumb({url: formRegister.values.url}))
                    // formRegister.clearForm()
                    // setFormVisible(false)
                }}>
                    <div>
                        <button
                            type='button'
                            className='close-modal'
                            onClick={() => setFormVisible(false)}
                        >
                            X
                        </button>
                        <input
                            type="text"
                            placeholder='Título do vídeo'
                            name='title'
                            value={formRegister.values.title}
                            onChange={formRegister.handleChange}
                        />
                        <input
                            type="url"
                            placeholder='URL do vídeo'
                            name='url'
                            value={formRegister.values.url}
                            onChange={formRegister.handleChange}
                        />
                        {thumbnail && (
                            <img
                                src={`https://img.youtube.com/vi/${thumbnail}/hqdefault.jpg`}
                                alt='thumbnail do vídeo'
                            />
                        )}
                        <button type='submit'>
                            Cadastrar
                        </button>
                    </div>
                </form>
            )}
        </StyledRegisterVideo>
    )
}

export default RegisterVideo