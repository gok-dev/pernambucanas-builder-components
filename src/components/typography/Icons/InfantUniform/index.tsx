import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const InfantUniform: React.FC<SVGProps> = props => {
  const theme = useTheme()
  return (
    <svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 32 32"
      fill={props.color || theme.colors.contrast.default}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2 28.282l.002.009v2.256c0 .25.212.453.475.453h2.854a.464.464 0 00.475-.453h9.51c0 .25.213.453.476.453h2.853a.464.464 0 00.476-.453V15.14c0-1.748-1.493-3.17-3.327-3.17h-1.431v-.89a.428.428 0 00-.035-.196.477.477 0 00-.444-.274H7.237a.484.484 0 00-.187.035c-.024.009-.043.027-.066.04-.03.018-.06.031-.086.055a.456.456 0 00-.098.136l-.006.009c-.014.031-.016.068-.023.103-.004.025-.015.049-.015.074v.908H5.329c-1.834 0-3.327 1.422-3.327 3.17v4.522l-.002.01.002.008v8.593L2 28.282zm1.426-1.36a.897.897 0 01-.473.78V20.25a.897.897 0 01.473.779v5.892zm4.28-14.799v-.373l2.666 1.09c.007.002.013 0 .02.003a.49.49 0 00.167.033.492.492 0 00.168-.033c.007-.003.013-.001.02-.004l2.665-1.088v.374l-2.853 1.164-2.852-1.165zm2.853-.193l-1.013-.414h2.027l-1.014.414zm7.133 9.1c0-.334.194-.624.478-.781v7.454a.897.897 0 01-.478-.781V21.03zm.478-5.89v4.141c-.82.202-1.429.906-1.429 1.749v5.892c0 .843.61 1.547 1.429 1.749v1.423h-1.903v-12.69a.464.464 0 00-.475-.454.464.464 0 00-.476.453v12.238h-4.281v-15.56l2.952-1.205h1.807c1.31 0 2.376 1.015 2.376 2.264zM5.329 12.876h1.806l2.949 1.205v15.56H5.806V17.403a.464.464 0 00-.475-.453.464.464 0 00-.476.453v12.69H2.953V28.67c.817-.203 1.424-.905 1.424-1.747V21.03c0-.841-.607-1.544-1.424-1.747V15.14c0-1.249 1.066-2.264 2.376-2.264zM19.72 2.142a.442.442 0 00-.13.338l.078 1.234c-.008.033-.021.065-.021.1 0 .063.014.123.039.178l1.332 21.145c.015.24.223.426.475.426h7.604c.251 0 .46-.187.474-.426l1.333-21.144a.43.43 0 00.04-.18c0-.036-.014-.068-.023-.102L31 2.48a.438.438 0 00-.129-.338.485.485 0 00-.346-.142h-10.46a.488.488 0 00-.345.142zm8.905 13v-4.986c0-.614.432-1.128 1.02-1.296l-.425 6.735h-.12a.465.465 0 01-.475-.453zm1.078-7.218c-1.145.161-2.03 1.096-2.03 2.232v4.986c0 .75.64 1.36 1.427 1.36h.063l-.428 6.795H25.77V7.893a.464.464 0 00-.475-.454.464.464 0 00-.476.454v15.404h-2.964l-.428-6.795h.064c.786 0 1.426-.61 1.426-1.36v-4.986c0-1.136-.884-2.07-2.03-2.233l-.23-3.656h9.278l-.232 3.657zm-7.737 7.218c0 .25-.213.454-.475.454h-.121l-.425-6.736c.588.167 1.02.682 1.02 1.296v4.986h.001zm-.054 9.061h2.907v.454h-2.878l-.029-.454zm3.858.454v-.454h2.908l-.029.454H25.77zm4.25-21.75l-.03.454H20.6l-.03-.455h9.45z" />
    </svg>
  )
}
