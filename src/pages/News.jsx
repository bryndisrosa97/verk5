import { useParams } from 'react-router-dom';
import { News } from '../components/news/News'

export function NewsPage() {
  
  let { id } = useParams();

  return (
    <div>
      <News newsid={id} />
    </div>
  );

}