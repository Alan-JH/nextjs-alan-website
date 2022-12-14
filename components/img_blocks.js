import {triple_centered_img_block, dual_centered_img_block} from './centered_img_blocks'

const neg_margin = -5

export function triple_img_photo_descrip_block(title, descript, p_l, p_m, p_r) {
  return (<div>
    <h3 style={{marginBottom: neg_margin}}>{title}</h3>
    <p>{descript}</p>
    <div className='photo-div'>
    {triple_centered_img_block(p_l, p_m, p_r)}
    </div>
    <hr></hr>
    </div>
  )
}

export function double_img_photo_descrip_block(title, descript, p_l, p_r) {
  return (<div>
    <h3 style={{marginBottom: neg_margin}}>{title}</h3>
    <p>{descript}</p>
    <div className='photo-div'>
    {dual_centered_img_block(p_l, p_r)}
    </div>
    <hr></hr>
    </div>
  )
}


export function img_photo_descrip_block(title, descript, src, alt) {
    return (
      <div>
      <h3 style={{marginBottom: neg_margin}}>{title}</h3>
      <p>{descript}</p>
      <div className='photo-div'>
      <img
        src = {src}
        alt = {alt}
        layout='fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      <hr></hr>
      </div>
      
    )
  }
  
export function img_photo_descrip_block_h2(title, descript, src, alt) {
    return (
      <div>
      <h2 style={{marginBottom: neg_margin}}>{title}</h2>
      <p>{descript}</p>
      <div className='photo-div'>
      <div style={{margin: 0, textAlign: 'center', display: 'block'}}>
      <img
        src = {src}
        alt = {alt}
        layout = 'fill'
        objectFit='contain'
        loading="lazy"
      />
      </div>
      </div>

      <hr></hr>
      </div>
      
    )
}