import IPresenters from './interfaces/iPresenters'
import infrastructures from './infrastructures'
import repositories from './repositories'
import useCases from './useCases'
import presenters from './presenters'

const cInfrastructures = infrastructures()
const cRepositorires = repositories(cInfrastructures)
const cUseCases = useCases(cRepositorires)
const cPresenters = presenters(cUseCases)

export default {
  session: cPresenters.session,
  character: cPresenters.character
} as IPresenters
