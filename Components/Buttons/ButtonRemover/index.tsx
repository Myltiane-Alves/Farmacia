import * as S from './styles'
import { FiTrash2 } from "react-icons/fi";

export default function ButtonRemover() {
    return (
        <S.Container>
            <button
                type="button"
                className="btn"
              >
                <FiTrash2 size={30} />
              </button>
        </S.Container>
    )
}
