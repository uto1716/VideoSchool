import * as React from "react"

type AccordionContextType = {
  value?: string
  onValueChange?: (value: string) => void
}

const AccordionContext = React.createContext<AccordionContextType>({})

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    type?: 'single'
    collapsible?: boolean
  }
>(({ className = '', children, ...props }, ref) => {
  const [value, setValue] = React.useState<string>('')

  return (
    <AccordionContext.Provider value={{ value, onValueChange: setValue }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value: string }
>(({ className = '', value: itemValue, children, ...props }, ref) => {
  const { value, onValueChange } = React.useContext(AccordionContext)
  const isOpen = value === itemValue

  return (
    <div ref={ref} className={className} data-state={isOpen ? 'open' : 'closed'} {...props}>
      <AccordionItemContext.Provider value={{ itemValue, isOpen, onValueChange }}>
        {children}
      </AccordionItemContext.Provider>
    </div>
  )
})
AccordionItem.displayName = "AccordionItem"

type AccordionItemContextType = {
  itemValue: string
  isOpen: boolean
  onValueChange?: (value: string) => void
}

const AccordionItemContext = React.createContext<AccordionItemContextType>({
  itemValue: '',
  isOpen: false,
})

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className = '', children, ...props }, ref) => {
  const { itemValue, isOpen, onValueChange } = React.useContext(AccordionItemContext)

  return (
    <button
      ref={ref}
      className={`flex flex-1 items-center justify-between font-medium transition-all ${className}`}
      onClick={() => onValueChange?.(isOpen ? '' : itemValue)}
      {...props}
    >
      {children}
      <svg
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
})
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = '', children, ...props }, ref) => {
  const { isOpen } = React.useContext(AccordionItemContext)

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-all ${isOpen ? 'animate-accordion-down' : 'animate-accordion-up hidden'}`}
      {...props}
    >
      <div className={className}>{children}</div>
    </div>
  )
})
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
