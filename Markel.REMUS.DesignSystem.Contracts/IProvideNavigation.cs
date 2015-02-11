using System.Collections.Generic;

namespace Markel.REMUS.DesignSystem.Contracts
{
    public interface IProvideNavigation
    {
        IList<INavigateSomewhere> PrimaryNavigation { get; }
        IList<INavigateSomewhere> UtilityNavigation { get; }
        IList<INavigateSomewhere> SectionActions { get; }
    }
}
