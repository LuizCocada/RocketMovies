import { Container } from './styles';
import { Tag } from '../../components/Tag';

export function Note({ data, children, ...rest }) {
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            {children}

            {data.tags && (
                <footer>
                    {data.tags.map(tag => (
                        <Tag className="tags" key={tag.id} title={tag.name} />
                    ))}
                </footer>
            )}
        </Container>
    );
}