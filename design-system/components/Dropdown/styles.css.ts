// import { style } from '@vanilla-extract/css'
// import { CSSVarFunction } from '@vanilla-extract/private'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { atoms } from '../../css'

export const variants = recipe({
  base: [
    atoms({
      position: 'fixed',
      borderRadius: '2xLarge',
      alignItems: 'center',
      height: 'fit',
    }),
  ],
  variants: {
  },
  compoundVariants: []
})

export type Variants = RecipeVariants<typeof variants>
