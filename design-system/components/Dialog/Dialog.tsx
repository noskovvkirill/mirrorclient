import * as React from 'react'
import { Box } from '../Box'
import { Button } from '../Button'
import { Stack } from '../Stack';
import * as DialogRadix from '@radix-ui/react-dialog';
import { ReactNodeNoStrings } from '../../types'
import * as styles from './styles.css'
import type { Props as ButtonProps } from '../Button'
import type { BoxProps } from '../Box'
// import { useAnimation } from 'hooks/useAnimation';
export const validDialogComponents = [
  'article',
  'div',
  'section',
  typeof DialogRadix.Root
] as const

type Props = {
  as?: typeof validDialogComponents[number];
  width?: BoxProps['width'];
  children: ReactNodeNoStrings;
  trigger?: string;
  size?: ButtonProps['size'];
  tone?: ButtonProps['tone'];
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}



export const Dialog = ({ children, tone='blue', trigger, size = 'medium', width = '128', isOpen, setIsOpen }: Props) => {

  // const opacityValue = useAnimation('linear', 500, 0, isOpen)


  return (
    <DialogRadix.Root
      open={isOpen}
      onOpenChange={(isOpen) => {
        if (setIsOpen) { setIsOpen(isOpen) }
      }}
    >
      {trigger && (
        <DialogRadix.Trigger asChild>
          <Button
          tone={tone}
          size={size}>{trigger}</Button>
        </DialogRadix.Trigger>
      )}
      <DialogRadix.Portal>
        <DialogRadix.Overlay asChild>
          <Box width='full' height='full'

            position="fixed" left={"0"} top={"0"}
            className={styles.overlayStyle}
          ></Box>
        </DialogRadix.Overlay>

        <Box as={DialogRadix.Content}
           width={width}
           display={'flex'}
           alignItems={'center'}
            justifyContent={'center'}
           overflow={'hidden'}
           height='full'
           maxHeight={'full'}
               zIndex='100'
               position="fixed" left={"0"} top={"0"}
               paddingY={'16'}
               style={{
                   left: '50%', top: '50%', bottom:'0',
                   transform: 'translate(-50%, -50%)'
               }}
               paddingX={'4'}
         
          >
          <Box 
          width='full'
          className={styles.variants()}>
          {children}
          </Box>
 
        </Box>
      </DialogRadix.Portal>
    </DialogRadix.Root>)
}