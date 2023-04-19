import { Icon } from '../Icon';
import * as S from './styles'

type Props = {
    color?: string;
    leftIcon?: string;
    rightIcon?: string;
    value: string;
    onClick?: () => void;
    fill?: boolean;
}
export const ButtonWithIcon = ({ color, leftIcon, rightIcon, value, onClick, fill }: Props) => {
    return (
        <S.Container>
            {leftIcon &&
                <div
                    className="leftSide"
                    style={{ backgroundColor: fill ? 'rgba(0, 0, 0, .05' : "#FFF" }}
                >
                    <Icon
                        color={fill ? '#FFF' : color}
                        svg={leftIcon}
                        width={24}
                        height={24}
                    />
                </div>
            }
            <p
                className="centerSide"
                style={{ color: fill ? '#FFF' : '#1B1B1B' }}
            >{value}</p>

            {rightIcon &&
                <div
                    className="rightSide"

                >
                    <Icon
                        color={fill ? '#FFF' : color}
                        svg={rightIcon}
                        width={24}
                        height={24}
                    />
                </div>
            }
        </S.Container>
    )
}