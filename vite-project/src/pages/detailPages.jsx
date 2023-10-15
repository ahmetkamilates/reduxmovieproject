import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl, options } from '../constants/apiConstans'
import Loading from '../components/Loading'
import Badgets from '../components/Badgets'

const detailPages = () => {
  const { movie_id } = useParams()
  const [detail, setDetail] = useState(null)
  useEffect(() => {

    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err))
  }, [])
  const sum = detail?.revenue - detail?.budget
  if (!detail) return <Loading />
  return (
    <div className='movie-detail row p-4'>
      <div className='col-md-4 d-flex align-items-center justify-content-center'>
        <div className='position-relative'><img src={baseUrl.concat(detail.poster_path)} className='img-fluid rounded shadow-lg' /></div>
        <span className='vote bg-warning p-1 rounded shadow position-absolute  '>{detail.vote_average.toFixed()}</span>
      </div>
      <div>
        <div className='col-md-8'>
          <h1>{detail.title}</h1>
          <p>{detail.overview}</p>
          <div className='row'>
            <div className='col-6 col-md-12'>
              <p>Maliyet:{detail.budget}$</p>
              <p>Hasılat:{detail.revenue}$</p>
              <p>Kar:{sum}$</p>
            </div>

            <Badgets barTitle={'Kategoriler'} badgetTitle={detail.genres} />

            <Badgets barTitle={'Diller'} badgetTitle={detail.spoken_languages} />
            <Badgets barTitle={'Yapımcı Şirketler'} badgetTitle={detail.production_companies} />
          </div>
        </div>
      </div>
    </div>

  )
}

export default detailPages