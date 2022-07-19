import Reviews from './Reviews'
import CreateReview from './CreateReview'

function SongView(){
    return(
        <div>
            <h2>Songname</h2>
            <Reviews />
            <CreateReview />
        </div>
    )
}

export default SongView