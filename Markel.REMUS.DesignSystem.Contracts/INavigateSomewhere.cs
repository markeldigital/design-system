namespace Markel.REMUS.DesignSystem.Contracts
{
    public interface INavigateSomewhere
    {
        string PartialPath { get; }
        string Name { get; }
        string Url { get; }
    }
}
