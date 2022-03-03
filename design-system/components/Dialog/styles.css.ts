// import { style } from '@vanilla-extract/css'
// import { CSSVarFunction } from '@vanilla-extract/private'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { atoms } from '../../css'
import { style } from '@vanilla-extract/css'


export const overlayStyle = style({
  backdropFilter: 'blur(5px)',
  transformOrigin: 'center',
  animationFillMode: 'forwards',
  background: 'linear-gradient(to right, rgba(var(--colors-background), 0.5), rgba(var(--colors-background), 0.5)),linear-gradient( to right, rgba(var(--colors-foreground), 0.1), rgba(var(--colors-foreground), 0.1) )'
})

export const variants = recipe({
  base: [
    atoms({
      boxShadow: '1',
      position: 'fixed',
      borderRadius: '2xLarge',
      backgroundColor: 'groupBackground',
      alignItems: 'center',
      display: 'flex',
      fontWeight: 'medium',
      height: 'fit',
      minHeight: '80'
    }),
  ],
  variants: {
  },
  compoundVariants: []
})

export type Variants = RecipeVariants<typeof variants>
