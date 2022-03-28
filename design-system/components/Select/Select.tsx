import * as React from 'react'
import { Box } from '../Box'
import * as SelectComponent from '@radix-ui/react-select';
import { Stack } from '../Stack'


type SelectItem = {
  label: string;
  color?: 'accent'
}

type Props = {
  items:SelectItem[],
}


export const Select = ({ items }: Props) => {
  return <Box >
    <SelectComponent.Root>
      <SelectComponent.Trigger asChild>
        <Box 
        backgroundColor={'backgroundSecondary'}
        color='accent'
        borderRadius={'2xLarge'} padding='1.5'>
        <Stack align={'center'} direction='horizontal' justify='center'>
        <SelectComponent.Value/>
        <SelectComponent.Icon/>
        </Stack>
        </Box>
      </SelectComponent.Trigger>

    <SelectComponent.Content asChild>
      <Box backgroundColor={'white'} borderRadius={'2xLarge'}>
      {items.map((item)=>{
        return <SelectComponent.Item key={item.label + 'select'} value={item.label} asChild>
            <Box color='accent'>
              <SelectComponent.ItemIndicator>V</SelectComponent.ItemIndicator>
             <SelectComponent.ItemText>{item.label}</SelectComponent.ItemText>
             </Box>
           </SelectComponent.Item>
      })}
      </Box>
    </SelectComponent.Content>
      
    </SelectComponent.Root>
     </Box>
}