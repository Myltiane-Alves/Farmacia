import * as S from './styles';
import Google from './google.svg';
type Props = {
    svg: "google";
    color?: string;
    width: number;
    height: number;

}
export const Icon = ({ svg, color, width, height}: Props) => {
    return (
        <S.Container >
            {svg === 'google' && <Google color={color}/>}
        </S.Container>
    )
}