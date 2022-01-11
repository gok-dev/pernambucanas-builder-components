import { useTheme } from 'styled-components'
import { SVGProps } from '../types'

export const SceneAction: React.FC<SVGProps> = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.152 13.453H10.547l14.989-4.342a.458.458 0 00.312-.566l-.784-2.708A2.56 2.56 0 0022.614 4c-.237 0-.474.034-.704.1L7.838 8.177c-.651.188-1.19.621-1.52 1.218a2.528 2.528 0 00-.217 1.935l.766 2.645v10.898a2.548 2.548 0 002.546 2.545h5.496a.457.457 0 000-.915H9.413c-.9 0-1.631-.731-1.631-1.63v-6.225H25.695v6.225c0 .899-.732 1.63-1.631 1.63h-5.496a.457.457 0 000 .915h5.496a2.548 2.548 0 002.545-2.545V13.91a.457.457 0 00-.457-.457zm-8.065 4.28l1.943-3.365h2.528l-1.943 3.366h-2.528zm-3.584 0l1.943-3.365h2.528l-1.944 3.366h-2.527zm-3.584 0l1.943-3.365h2.528l-1.944 3.366H10.92zm1.7-5.92L9.365 8.686l2.438-.706a.449.449 0 00.06.07l3.255 3.126-2.438.706a.459.459 0 00-.06-.07zm6.13-5.756l3.254 3.125-2.439.707a.451.451 0 00-.06-.071L16.25 6.692l2.438-.706a.454.454 0 00.06.07zm-3.443.997l3.254 3.125-2.438.707a.441.441 0 00-.06-.07L12.808 7.69l2.438-.707a.487.487 0 00.06.071zm6.859-2.075a1.641 1.641 0 012.02 1.113l.657 2.268-1.835.531a.468.468 0 00-.06-.07l-3.254-3.126 2.472-.716zM7.12 9.836c.21-.383.556-.66.972-.78l.269-.078a.465.465 0 00.06.07l3.254 3.126-4.038 1.17-.657-2.268a1.62 1.62 0 01.14-1.24zm.662 4.532h4.024l-1.943 3.366H7.782v-3.366zm13.889 3.366l1.943-3.366h2.08v3.366h-4.023z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.536 9.111l-14.989 4.342h15.605c.253 0 .457.205.457.458v10.962a2.548 2.548 0 01-2.545 2.545h-5.496a.457.457 0 010-.915h5.496c.9 0 1.63-.731 1.63-1.63v-6.225H7.783v6.225c0 .899.732 1.63 1.63 1.63h5.497a.457.457 0 110 .915H9.413a2.548 2.548 0 01-2.546-2.545V13.975l-.766-2.645a2.528 2.528 0 01.217-1.935 2.528 2.528 0 011.52-1.218L21.91 4.1c.23-.066.467-.1.705-.1a2.56 2.56 0 012.449 1.837l.784 2.708a.457.457 0 01-.312.566zm.504-.622a.657.657 0 01-.448.814l-13.635 3.95h14.195c.363 0 .657.294.657.658v10.962a2.748 2.748 0 01-2.745 2.745h-5.496a.657.657 0 010-1.314h5.496c.789 0 1.43-.642 1.43-1.431v-6.025H7.983v6.025c0 .789.642 1.43 1.43 1.43h5.497a.657.657 0 110 1.315H9.413a2.748 2.748 0 01-2.746-2.745v-10.87l-.758-2.617a2.728 2.728 0 01.234-2.087 2.728 2.728 0 011.639-1.314l14.073-4.077c.247-.072.503-.108.76-.108a2.76 2.76 0 012.64 1.981l.785 2.708zm-13.295 3.167L9.754 8.783l1.984-.575 2.991 2.873-1.984.575zm-.881-3.605a.46.46 0 01-.06-.07l-2.439.706 3.255 3.125a.453.453 0 01.06.071l2.438-.706-3.255-3.126zm6.824-2.065l-2.438.706 3.254 3.126a.441.441 0 01.06.07l2.439-.706-3.255-3.125a.455.455 0 01-.06-.07zm-.065.227l-1.984.575 2.991 2.873 1.984-.574-2.991-2.874zm-3.377.77l-2.438.707 3.254 3.125a.452.452 0 01.06.07l2.438-.706-3.254-3.125a.48.48 0 01-.06-.07zm-.066.228l2.992 2.873-1.985.575-2.991-2.874 1.984-.574zm7.893 1.453l1.521-.44-.601-2.077a1.441 1.441 0 00-1.772-.976l-2.14.62 2.992 2.873zm-.126.157a.462.462 0 01.06.07l1.835-.531-.657-2.269a1.641 1.641 0 00-2.02-1.112l-2.472.716 3.254 3.126zm-14.8.427a1.419 1.419 0 00-.852.685 1.42 1.42 0 00-.123 1.087l.601 2.076 3.514-1.018-2.992-2.873-.147.043zm.214-.27l-.269.078c-.416.12-.761.397-.972.78a1.62 1.62 0 00-.14 1.24l.657 2.268 4.038-1.17-3.254-3.126a.465.465 0 01-.06-.07zm9.726 8.756h2.528l1.943-3.366H20.03l-1.943 3.366zm.346-.2H20.5l1.712-2.966h-2.065l-1.713 2.966zm-3.93.2h2.528l1.943-3.366h-2.528l-1.943 3.366zm.346-.2h2.066l1.712-2.966h-2.065l-1.713 2.966zm-3.93.2h2.527l1.944-3.366h-2.528l-1.943 3.366zm.346-.2h2.066l1.713-2.966h-2.066l-1.713 2.966zm.194-2.966H7.982v2.966h1.765l1.712-2.966zm-3.677-.2v3.366h2.08l1.944-3.366H7.782zm13.889 3.366h4.024v-3.366h-2.08l-1.944 3.366zm.346-.2h3.478v-2.966H23.73l-1.713 2.966z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.901 22.53a.457.457 0 00-.229-.397l-4.018-2.32a.457.457 0 00-.686.396v4.64a.457.457 0 00.686.396l4.018-2.32a.457.457 0 00.23-.396zm-4.018 1.527v-3.055l2.646 1.527-2.646 1.528z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.654 19.813l4.018 2.32a.457.457 0 010 .792l-4.018 2.32a.457.457 0 01-.686-.396v-4.64a.457.457 0 01.686-.396zm-.558 5.605a.657.657 0 01-.328-.569v-4.64a.657.657 0 01.986-.57l4.018 2.32a.657.657 0 010 1.14l-4.018 2.32a.657.657 0 01-.658 0zm.787-1.36l2.646-1.529-2.646-1.527v3.055zm.2-.347l2.046-1.182-2.046-1.181v2.363zM16.738 26.503a.458.458 0 000 .915.458.458 0 000-.915z"
        fill="#2485EA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.08 26.96a.658.658 0 111.317.003.658.658 0 01-1.316-.002zm.2 0a.458.458 0 01.916 0 .458.458 0 01-.915 0z"
      />
    </svg>
  )
}